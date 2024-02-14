import { ChevronDownIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "../../components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover"
import { DataList } from "src/components/pagination";
import { useUser } from "../../hooks/useUser";
import Loading from "src/components/ui/loading";
import { team } from "src/client/api";
import { useTranslation } from "react-i18next";

export default function AllTeams() {
  const { auth } = useUser();
  const teamnames = auth?.teams
  const { t } = useTranslation()

  const TeamCard = (lteam) => {
    return (
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage />
            {/* <AvatarFallback>{teamname[0]}</AvatarFallback> */}
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none">{lteam.user}</p>
          </div>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="ml-auto">
              {lteam.name === auth.team.name ? t('teams.current') : t('teams.switch')}
              <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 w-[140px]" align="end">
            <Command>
              <CommandList>
                <CommandGroup className="p-1.5">
                  {lteam.name !== auth.team.name && (
                    <CommandItem onSelect={() => team.switch_team(lteam.name).then(() => window.location.reload())}>
                      {t('teams.switch')}
                    </CommandItem>
                  )}
                  <CommandItem>{t('teams.view_members')}</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    )
  }
  return (
    <div className="mt-6">
      {auth ? (
        <>
          <div>
            <h1 className="subheading font-medium my-6">{t('teams.current_team')}</h1>
            <div className="flex flex-col gap-y-6 mt-[10px]">
              <TeamCard {...auth.team} />
            </div>
          </div>
          <div>
            <h1 className="subheading font-medium my-6">{t('teams.teams')}</h1>
            <div className="flex flex-col gap-y-6 mt-[10px]">
              <DataList pagination={teamnames.length > 6 ? true : false} listPerPage={6}>
                {teamnames.map(t => <TeamCard key={t.name} {...t} />)}
              </DataList>
            </div>
          </div>
        </>
      ) : <Loading />}
    </div>
  )
}