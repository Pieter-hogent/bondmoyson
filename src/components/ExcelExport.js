import ReactExport from 'react-export-excel';
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default function ExcelExport({ data }) {
	return (
		<ExcelFile element={<button>Download Excel</button>}>
			<ExcelSheet data={data} name="bond moyson">
				<ExcelColumn label="naam" value="name" />
				<ExcelColumn label="leeftijd" value="age" />
				<ExcelColumn label="bijdrage" value="bijdrage" />
				<ExcelColumn label="zorgkas" value="zorgkas" />
				<ExcelColumn label="kliniplan" value="kliniplan" />
				<ExcelColumn label="kliniplanplus" value="kliniplanplus" />
				<ExcelColumn label="dentaplan" value="dentaplan" />
				<ExcelColumn label="viviplan" value="viviplan" />
				<ExcelColumn label="totaal" value="totaal" />
			</ExcelSheet>
			{/* <ExcelSheet data={dataSet2} name="Leaves">
				<ExcelColumn label="Name" value="name" />
				<ExcelColumn label="Total Leaves" value="total" />
				<ExcelColumn label="Remaining Leaves" value="remaining" />
			</ExcelSheet> */}
		</ExcelFile>
	);
}
