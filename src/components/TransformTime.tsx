import { FC, useState } from "react";
import UtcConverterForm, {IUtConverterTime} from "./UtcConverterForm";
interface ITransformTimeProps {};

const TransformTime: FC<ITransformTimeProps> = (props) => {
	const [timeTransformed, setTimeTransformed] = useState<IUtConverterTime>();

	  const handleTimeTransformed=(data:IUtConverterTime)=>{
			setTimeTransformed(data)
			console.log(data.time);
		}
		return (
				<div className="p-4 rounded-2xl shadow-lg bg-purple ">
					<h1 className="text-white uppercase text-center ">Transform Time</h1>
					<div className="flex flex-col md:flex-row w-[20.5rem] md:w-[50rem] p-4 ">
					 <div className="w-full">
						<UtcConverterForm handleTimeTransformed={handleTimeTransformed}/>
					 </div>
					 <div className="w-full flex justify-center items-center">
						<div className="w-52 h-40 border-2 border-white rounded-md space-y-4 flex flex-col justify-center items-center">
						 <h1 className="text-white text-xl">{timeTransformed?.time}</h1>
						 <h1 className="text-white text-xl ">{timeTransformed?.timezone}</h1>
						</div>
					 </div>
					</div>
				</div>
		);
}

export default TransformTime;