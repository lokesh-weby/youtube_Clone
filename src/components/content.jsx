import st from "../content.module.css"
import items from "../items.json"


const Content = () => {
function Findlength(s){
  let max=45
  if(s.length>max){
    return s.slice(0,max)+"..."
  }
  return s
}
    
  return (
    <>
    <div className={st.wrapper}>
        <div className='row flex'>
            {items.map((i,index)=>(
                   <div className='col-md-12 col-lg-4' key={index}>
                    <img src={i.img} className={st.imgcontainer} alt="Thumbnail"/>
                   <div className={st.info}>
                   <img className={st.channel} src={i.Clogo} alt="Logo"/>
                   <div className={st.content}>
                       <h4>{Findlength(i.title)}</h4>
                       <p>{i.channel}</p>
                       <p>{i.views} ∙ <span>{i.days}</span></p>
                   </div>
                   <svg className={st.more} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg>
                   </div>
               </div>
            ))}
        </div>
        <div className={st.dummy}></div>
    </div>
  
    </>
  )
}

export default Content
