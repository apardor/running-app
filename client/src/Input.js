const Input = ({handleClick, handleQuery, searchvalue }) => {
  return (
    <section>
      <h3>Search previous dates</h3>
      <form className="form__search">
        <input type="date" className='input__date' ref={handleQuery} onChange={e => searchvalue(e.target.value)}/>
        <button className='button__btn' type="submit" onClick={e => handleClick(e)}>Search</button>
      </form>
  </section>
  )
}

export default Input;