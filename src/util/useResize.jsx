import { useState, useRef, useEffect } from "react";

const useResize = () => {
	const { clientWidth, clientHeight } = document.documentElement;

	const [size, setState] = useState({
		width: clientWidth,
		height: clientHeight,
	});

	const preventDuplicate = useRef(false);

	const handelResize = () => {
		if (!preventDuplicate.current) {
			window.requestAnimationFrame(() => {
				setState({
					width: document.documentElement.clientWidth,
					height: document.documentElement.clientHeight,
				});

				preventDuplicate.current = false;
			});
		}
		preventDuplicate.current = true;
	};

	useEffect(()=>{
		window.addEventListener('resize', handelResize);

		return () => {
			window.removeEventListener('resize', handelResize);
		}
	},[])

	return size;
};

export default useResize;
