import './list.css';
import Card from "./card";
import Country from "./data/Country";
import { useAppSelector } from "./redux/hooks";
import { getCoutries } from "./redux/slice"
export default function List() {
	const countries = useAppSelector(getCoutries);

	if (countries?.length) {
		return <>
			<table>
				<thead>
					<tr>
						<th className="w textStart">Name</th>
						<th className="textStart">Flag</th>
						<th className="textStart">Region</th>
						<th className="textStart">Population</th>
					</tr>
				</thead>
				<tbody>
					{countries.map((item: Country, index: number) => (
						<Card key={index} item={item} />
					))}
				</tbody>
			</table></>
	} else {
		return <p>Not found search result</p>;
	}
}
