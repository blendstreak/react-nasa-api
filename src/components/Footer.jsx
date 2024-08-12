export default function Footer(props){
    const {showSidebar, handleToggleSidebar, data} = props

    return (
        <footer>
            <p>
                {data?.title}
                <button>
                <i onClick={() => handleToggleSidebar()} className="fa-regular fa-circle-question"></i>
                </button>
            </p>
            
        </footer>
    )
}