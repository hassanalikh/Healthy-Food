
function ErrorMsg({fooditems}) {
  return (

    <>
    {fooditems.length === 0 ? <h3>I am still hungary</h3> : null}
    </>
  )
}

export default ErrorMsg