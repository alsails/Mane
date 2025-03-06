import Title from '../Components/Title/Title';
import './Requisites.css';

function Requisites() {
    return (
        <section className='requisites'>
            <Title start="Ре" end="квизиты" />
            <table className='requisites__table'>
                <tbody>
                    <tr>
                        <td className='requisites__table-text_name requisites__table-text'>Наименование</td>
                        <td className='requisites__table-text'>ИП МАТВИЕНКО ЮЛИЯ ПЕТРОВНА</td>
                    </tr>
                    <tr>
                        <td className='requisites__table-text_name requisites__table-text'>Юридический адрес</td>
                        <td className='requisites__table-text'>143444 МО г. Красногорск, пр-д Островского д.19, кв. 121</td>
                    </tr>
                    <tr>
                        <td className='requisites__table-text_name requisites__table-text'>ИНН</td>
                        <td className='requisites__table-text'>325002610280</td>
                    </tr>
                    <tr>
                        <td className='requisites__table-text_name requisites__table-text'>КПП</td>
                        <td className='requisites__table-text'>Нет</td>
                    </tr>
                    <tr>
                        <td className='requisites__table-text_name requisites__table-text'>ОГРН</td>
                        <td className='requisites__table-text'>318505300027330</td>
                    </tr>
                    <tr>
                        <td className='requisites__table-text_name requisites__table-text'>ОКВЭД</td>
                        <td className='requisites__table-text'>74.10, 71.11</td>
                    </tr>
                    <tr>
                        <td className='requisites__table-text_name requisites__table-text'>Расчетный счет</td>
                        <td className='requisites__table-text'>40802810602990001124</td>
                    </tr>
                    <tr>
                        <td className='requisites__table-text_name requisites__table-text'>Банк</td>
                        <td className='requisites__table-text'>АО "АЛЬФА-БАНК"</td>
                    </tr>
                    <tr>
                        <td className='requisites__table-text_name requisites__table-text'>Корпоративный счет</td>
                        <td className='requisites__table-text'>30101810200000000593</td>
                    </tr>
                    <tr>
                        <td className='requisites__table-text_name requisites__table-text'>БИК банка</td>
                        <td className='requisites__table-text'>044525593</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}
export default Requisites;