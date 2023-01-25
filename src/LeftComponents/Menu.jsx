import React,{useEffect} from 'react'
 

const Menu = ({title,menuObject}) => {

 useEffect(()=>{
    const allLi=document.querySelector('.MenuContainer ul').querySelectorAll('li');

    const changeMenuActive =()=>{
        allLi.forEach((n)=>n.classList.remove("active"));
        this.classList.add("active");
    }

    allLi.forEach((n)=>n.addEventListener('click',changeMenuActive));
 },[])

  return (
    <div className="MenuContainer">
    <p className="title">{title}</p>
    <ul>
        {
            menuObject.map((i)=>(
                <li key={i.id} >
                    {" "}
                    <a href="#">
                        <i>{i.icon}</i>
                        <span>{i.name}</span>

                    </a>
                </li>
            ))
        }
    </ul>
    </div>
  )
}

export default Menu
