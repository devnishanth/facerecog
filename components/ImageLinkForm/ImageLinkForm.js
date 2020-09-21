import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange}) =>{
	return(
		<div >
			<p className ='f3'>
				{'This Magic Brain will detect any face. Give it a try.'}
			</p>
			<div className='center'>
				<div className=' form center pa3 br3 shadow-5'>
					<input className="f4 pa2 w-70 center" type="text" onChange={onInputChange}/><br/>
					<button className='w-40 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
				</div>
			</div>
		</div>


		);

}

export default ImageLinkForm;