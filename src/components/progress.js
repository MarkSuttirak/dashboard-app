export default function Progress({value, width}){
  return (
    <div class="w-1/2 bg-gray-200 rounded-full h-2 dark:bg-gray-700" style={{width:width}}>
      <div class="bg-blue-600 h-2 rounded-full dark:bg-blue-500" style={{ width:value }}></div>
    </div>
  )
}