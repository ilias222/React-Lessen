import { useEffect, memo } from "react"
import { Button } from "../ui/Button"

export const Child = memo(({count}) =>{

    useEffect(() => {
        console.log('Child did mount')
      }, [count])

      useEffect(() => {
        const interval = setInterval(()=> console.log('1') ,1000)
        return () =>{
            console.log('child unmoun')
            clearInterval(interval)
        }
      }, [])

    return(
        <>
        <h2>Child component</h2>
        {/* <Button type='submit' className='btn'>Click count</Button>
        <p>Count :{count}</p> */}
        </>
    )
})