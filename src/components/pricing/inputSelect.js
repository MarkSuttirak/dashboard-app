import { Select, SelectContent, SelectItem, SelectTrigger, SelectGroup, SelectValue } from "src/components/ui/select"

export default function SelectInput({label, defaultValue, onValueChange, lists, name, disabled}){
  return (
    <div className="flex justify-between items-center w-full">
      <label className="main-desc w-3/4">
        {label}
      </label>
      <Select className='form-input' name={name} defaultValue={defaultValue} onValueChange={onValueChange} disabled={disabled}>
        <SelectTrigger className="w-[135px] bg-white">
          <SelectValue defaultValue={defaultValue}/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="max-h-[400px]">
            {lists.map((list, index) => <SelectItem value={list} key={index} onValueChange={() => onValueChange(list)}>{typeof list !== 'number' ? list : list.toLocaleString()}</SelectItem>)}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}