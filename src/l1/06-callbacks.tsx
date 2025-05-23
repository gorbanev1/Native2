const callback = () => {
    alert('hey')
}
window.setTimeout(callback, 1000)

export const User = () => {
    const deleteUser = () => {
        alert('user should be deleted');
    }
    const saveUser = () => {
        alert('user should be deleted');
    }
    const buttonHandler=()=>{

    }
    const lostFocusHandler=(e)=>{
        console.log(e.currentTarget.value)
    }


    return (
        <div>
            <textarea onBlur={lostFocusHandler}></textarea>
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>

        </div>
    )
}