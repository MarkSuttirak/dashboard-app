import TableTest from "../components/tableTest";

const TestPage = () => {
  const testHead = [
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Invoice',
      key: 'invoice'
    }
  ]

  const tableInfo = [
    {
      name: 'Hello',
      invoice: 'Invoice #001',
    },
    {
      name: 'Hello AAA',
      invoice: 'Invoice #002',
    },
  ]
  return (
    <div className="dashboard-container">
      <TableTest dataHeadings={testHead} info={tableInfo}/>
    </div>
  )
}

export default TestPage;