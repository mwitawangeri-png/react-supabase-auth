import CourseCard from "../reusables/ListCard";
import { supabase } from "../supabase";

const MOCK_DATA = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    title: `Product ${i + 1}`,
    price: `$${(i + 1) * 10}.00`
  }));
  
  console.log(MOCK_DATA)

export async function ProDashboard(){
    //listen for Courses from the database
const { data, error } = await supabase
  .from('Courses')
  .select()

  if(error){
    console.error("Fetch attempt failed", error)

  }
  console.log(data)
    return(
        <div className="ProDashboardParent" style={{display: 'flex', justifyContent: 'center', gap: '20px', paddingTop: '50px'}} >
            <div style={{display: 'flex', flexDirection: 'column',gap: '30px', maxWidth: '1000px', width: '100%'}}>
                
                <div className="pageNav" 
                style={{height: '40px',
                maxWidth: '300px', 
                border: '1px solid #cfd1d4', 
                borderRadius: '30px', 
                backgroundColor: '#f0f5fc',
                padding: '5px 15px',
                display: 'flex',
                gap: '10px'}}>
                    <input
                    style={{flexGrow: 1, width: '0', height: '100%', border: 'none', outline: 'none', backgroundColor: 'transparent'}}
                    placeholder="Start typing...">
                    </input>
                    {/* End of page name */}
                </div>
                <div className="itemsListWraper">
                   <div className="itemListParent" style={{display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
                    {MOCK_DATA.map((item) => {

                        return (
                            <CourseCard key={item.id}/>

                        );
                    })}
                    
                    </div> 

                </div>
            </div>
        </div>
    );
}