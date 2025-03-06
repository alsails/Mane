import './Title.css';

function Title({start, end}) {
  return (
    <h2 className='section__title'><span>{start}</span>{end}</h2>
  )
}
export default Title;