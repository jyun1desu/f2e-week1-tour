import React from 'react';
import keyVisual from 'images/key-visual.png';

import style from './index.module.scss';

export default function index() {
	return (
		<div className={style.home}>
			<section className={style.banner}>
				<img src={keyVisual} alt="key visual" />
				<div className={style.slogan}>
					<p>探索台灣</p>
					<p>Taiwan is here.</p>
				</div>
			</section>
		</div>
	)
}
