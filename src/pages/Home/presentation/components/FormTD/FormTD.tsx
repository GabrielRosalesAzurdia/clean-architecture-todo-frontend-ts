import React from "react";

interface FormInterface {}

const FormTD: React.FC<FormInterface> = () => {
	return <div>
		<form>
			<label>ingrse título</label>
			<input type="text" />
			<label>ingrse descripción</label>
			<input type="text" />
			<button>OK</button>
		</form>
	</div>;
};

export default FormTD;
