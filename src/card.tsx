import Country from './data/Country';
export default function Card(props: { item: Country }) {
	const { item } = props;
	return <>
		<tr className="w textStart" data-country={JSON.stringify(item)}>
			<td
			>{item.name.common}
			</td>
			<td><img src={item.flags.png} /></td>
			<td>{item.region}</td>
			<td>{item.population}</td>
		</tr>
	</>
}

