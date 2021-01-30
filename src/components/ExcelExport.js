import ReactExport from 'react-export-excel';
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default function ExcelExport({ data, filename }) {
	return (
		<ExcelFile
			filename={filename}
			element={
				<button className="p-3">
					<img
						src={process.env.PUBLIC_URL + '/excel_download.png'}
						alt=""
						width="48"
						height="48"
					/>
				</button>
			}
		>
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
		</ExcelFile>
	);
}
