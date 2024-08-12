export default function Sidebar(props){
    const {handleToggleSidebar, data} = props
    return (
        <div>
            <div onClick={() => handleToggleSidebar()} className="shadowthing"></div>
            <div className="sidebar">
                <p className="sidebar-title">{data?.title}</p>
                <p className="description">{data?.date}</p>
                <p className="content">
                    {data?.explanation}
                    
                </p>
                <button>
                    <i onClick={() => handleToggleSidebar()} className="fa-solid fa-arrow-right-long"></i>  
                </button>    
            </div>
        </div>
    )
}