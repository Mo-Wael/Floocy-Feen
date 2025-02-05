interface IProps {

}

const LeftSide = ({} : IProps) => {
    return (
        <div className="left-side">
            <div className="topleft">
                <h2>Total Balance:<br/>{0}</h2>
                <ul>
                    <li>Deposit<br/>{0}</li>
                    <li>withdraw<br/>{0}</li>
                </ul>
            </div>
            <div className="transactions">
                <h2>Transactions</h2>
                {/* to be filled with transactions data */}
                {/* <ul>
                    <li>buttonTransaction 1</li>
                    <li>Transaction 2</li>
                    <li>Transaction 3</li>
                </ul> */}
                <table>
                    <thead>
                        <tr>
                            <th>button</th>
                            <th>trasnaction</th>
                            <th>amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><button type="button">x</button></td>
                            <td>orders</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td><button type="button">x</button></td>
                            <td>orders</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td><button type="button">x</button></td>
                            <td>orders</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td><button type="button">x</button></td>
                            <td>orders</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td><button type="button">x</button></td>
                            <td>orders</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td><button type="button">x</button></td>
                            <td>orders</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td><button type="button">x</button></td>
                            <td>orders</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td><button type="button">x</button></td>
                            <td>orders</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td><button type="button">x</button></td>
                            <td>orders</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td><button type="button">x</button></td>
                            <td>orders</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td><button type="button">x</button></td>
                            <td>orders</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td><button type="button">x</button></td>
                            <td>orders</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td><button type="button">x</button></td>
                            <td>orders</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td><button type="button">x</button></td>
                            <td>orders</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td><button type="button">x</button></td>
                            <td>orders</td>
                            <td>50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>  
    )
}

export default LeftSide;