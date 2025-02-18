import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"

const Pricing = () => {
  return (
    <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">Pricing</h2>
        <div className="flex flex-wrap">
            {pricingOptions.map((price,index)=>(
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                    <div className=" p-10 border border-neutral-700 rounded-xl">
                        <p className="text-4xl mb-8">
                        {price.title}
                        </p>
                        <p className="mb-8 " >
                           <span className="text-5xl mt-6 mr-2"> {price.price}</span>
                           <span className="text-neutral-700 tracking-light">/Month</span>
                        </p>

                        <ul >
                            {price.features.map((feature,index)=> (
                                <li key={index} className="mt-8 flex">
                                    <CheckCircle2/>
                                    <span className="ml-2">{feature}</span>
                                </li>
                            ))}
                        </ul>
                            
                            <a href="#" className="inline-flex justify-center items-center text-center
                             w-full h-12 p-5 mt-20 tracking-light border hover:bg-orange-900
                              border-orange-900 rounded-lg transition duration-900">
                                Subscribe
                            </a>
                        
                        </div>
                </div>
            ))}

        </div>

    </div>
  )
}

export default Pricing