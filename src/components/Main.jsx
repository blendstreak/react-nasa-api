export default function Main(props){
    const {data, handleToggleSidebar} = props
    
    return (
        <header>
            <div className="img-container">
            <img src={data.hdurl} alt={data.title||"background-img"} onClick={() => handleToggleSidebar()}/>
            </div>
        </header>
    )
}
