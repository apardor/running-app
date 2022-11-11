const Input = ({handleClick, handleQuery, searchvalue }) => {
  return (
    <section>
      <h3>Search previous pictures of the day</h3>
      <form>
        <input type="date" name='' ref={handleQuery} onChange={e => searchvalue(e.target.value)}/>
        <button className='button__btn' type="submit" onClick={e => handleClick(e)}>Search</button>
      </form>
  </section>
  )
}

export default Input;