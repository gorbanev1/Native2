const callback=()=>{
    alert('hey')
}
window.setTimeout(callback,1000)

const User=()=>{
    const deleteUser = ()=>{
        alert('user should be deleted');
    }
    const saveUser = ()=>{
        alert('user should be deleted');
    }
    return <div>
        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>
}