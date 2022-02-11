import { FC } from "react";
import { useForm, SubmitHandler,Controller } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import UtcConverterService from '../services/UtcConverterService';
import 'rc-time-picker/assets/index.css';
import moment from "moment"
import TimePicker from 'rc-time-picker';

export interface IUtConverterFormProps {
	handleTimeTransformed:(data:IUtConverterTime)=>void;
};
export interface IUtConverterTime {
	time:string;
	timezone:number;
};

const schema = yup.object().shape({
	time:yup.string().required(),
	timezone:yup.number().required().integer().negative(),
})

const UtcConverterForm: FC<IUtConverterFormProps> = ({handleTimeTransformed}:IUtConverterFormProps) => {

	const {
			register,
			control,
			handleSubmit,
			watch,
			formState: { errors }
		} = useForm<IUtConverterTime>({
			resolver:yupResolver(schema),
		});
		const formSubmitHandler:SubmitHandler<IUtConverterTime>=(data:IUtConverterTime)=>{
			data.time=moment(data.time).format('HH:mm:ss')
			UtcConverterService.converter(data)
			.then(function (response){
				if (response.status === 200) {
					handleTimeTransformed((response.data as any).response)
        } else {
          console.log("error");
        }
			})
			.catch(function (error) {
        console.log(error);
      });
		}

		return (
				<form className="max-w-125 my-0 mx-auto" onSubmit={handleSubmit(formSubmitHandler)}>
					<label className="py-4 block text-sm text-white" >Time</label>
					<Controller name="time" control={control} render={({field:{onChange}})=>(
						<TimePicker onChange={onChange} format={"HH:mm:ss"} className="w-full" />
					)}/>
					{errors.time?.message &&  <span className="text-pinkLight">{errors.time.message}</span>}
					<label className="py-4 block text-sm text-white">Timezone</label>
					<input type="text" className="w-full mb-3 py-1 px-4 block box-border rounded-sm text-sm text-gray-200" {...register('timezone')}/>
					{errors.timezone?.message &&  <span className="text-pinkLight">{errors.timezone.message}</span>}
					<input type="submit" value="Transform" className="bg-pink my-9 text-white uppercase p-3 block w-full cursor-pointer hover:bg-pinkLight" />
				</form>
		);
}

export default UtcConverterForm;