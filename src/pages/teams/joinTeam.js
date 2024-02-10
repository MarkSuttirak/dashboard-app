import React, { useState } from 'react'
import { useFormik } from 'formik';
import { useQuery, useMutation } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import StepMaintainer from 'src/components/StepMaintainer';
import { team } from 'src/client/api';
import { useToast } from 'src/components/ui/use-toast';
import { confirmJoinSchema, teamFormSchema } from './validations/joinTeamSchema';

const JoinTeam = () => {
    const params = useParams();

    const [targetTeam, setTargetTeam] = useState(null);

    const { isLoading } = useQuery(['invite', params?.inviteCode], () => team.get_invite(params?.inviteCode), {
        enabled: !!params?.inviteCode,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        retry: 1,
        onSuccess: (data) => setTargetTeam(data),
    });

    if (isLoading) {
        return <p>Loading...</p>
    }


    return (
        <StepMaintainer targetTeam={targetTeam} setTargetTeam={setTargetTeam}>
            <TeamForm initialValues={{ invite_code: params?.inviteCode }} />
            <ConfirmJoin />
        </StepMaintainer>
    )
}

export default JoinTeam;


export const TeamForm = ({
    next,
    initialValues = {
        invite_code: ''
    },
    targetTeam,
    setTargetTeam
}) => {
    // if targetTeam is not null, then skip this step
    if (targetTeam) {
        next();
    }

    const { toast } = useToast();

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: teamFormSchema,
        onSubmit: ({ invite_code }) => {
            team.get_invite(invite_code).then((team) => {
                setTargetTeam(team);
                next();
            }).catch((error) => {
                // TODO: show error message about invalid or expired invite code
            })
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input name='invite_code' value={formik.values.invite_code} onChange={formik.handleChange} />
            <button type='submit'>Continue</button>
        </form>
    )
}


export const ConfirmJoin = ({
    targetTeam,
    initialValues = {
        accepted_user_terms: false
    }
}) => {
    const { navigate } = useNavigate();
    const { mutate } = useMutation('joinTeam', team.join_team, {
        onSuccess: () => navigate('/dashboard/teams/teams'),
        onError: (err) => console.log("err", err)
    });

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: confirmJoinSchema,
        onSubmit: ({ accepted_user_terms }) => mutate({
            invite_code: targetTeam.invite_code,
            accepted_user_terms
        })
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <p>You are about to join {targetTeam.team_name} team</p>
            <input type="checkbox" name='accepted_user_terms' value={formik.values.accepted_user_terms} onChange={formik.handleChange} /> I accept the terms and conditions
            <br />
            <button type='submit'>Join</button>
        </form>
    )
}