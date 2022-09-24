import React, { useState } from 'react';
import './Picker.css';

const RgbValue = (props:{colorName: string, colorValue: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, onBlur: (e: React.FocusEvent<HTMLInputElement>) => void}) => {
    return(
        <div className={'input'}>
            <label htmlFor='slider'>{props.colorName}</label>
            <input id={'slider'} type={'range'} min={'0'} max={'255'} onChange={(e) => props.onChange(e)}/>
            <input id={'value'} type={'number'} min={'0'} max={'255'} value={props.colorValue} 
            onChange={(e) => props.onChange(e)} onBlur={(e) => props.onBlur(e)} />
        </div>
    );
};

const Output = (props:{red: string, green: string, blue: string}) => {
    return(
        <div className={'output'}>
            <span className={'pallet'} style={{backgroundColor:`rgb(${props.red},${props.green},${props.blue})`}}></span>
            <input className={'rgbText'} type={'text'} value={`rgb(${props.red},${props.green},${props.blue})`} readOnly></input>
        </div>
    );
}

function Picker() {
    // const [状態を保存する変数, 状態を更新する関数] = React.useState(初期値)
    const [red, setRed] = useState('0');
    const [green, setGreen] = useState('0');
    const [blue, setBlue] = useState('0');

    const handleChangeRed = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRed(e.target.value);
    };

    const handleChangeGreen = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGreen(e.target.value);
    };

    const handleChangeBlue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBlue(e.target.value);
    };

    const handleBlurRed = (e: React.FocusEvent<HTMLInputElement>) => {
        setRed((0 <= parseInt(e.target.value) && parseInt(e.target.value) <= 255) ? e.target.value : '0');
    }

    const handleBlurGreen = (e: React.FocusEvent<HTMLInputElement>) => {
        setGreen((0 <= parseInt(e.target.value) && parseInt(e.target.value) <= 255) ? e.target.value : '0');
    }

    const handleBlurBlue = (e: React.FocusEvent<HTMLInputElement>) => {
        setBlue((0 <= parseInt(e.target.value) && parseInt(e.target.value) <= 255) ? e.target.value : '0');
    }

    return(
        <div className="box">
            <RgbValue colorName='R' colorValue={red} onChange={handleChangeRed} onBlur={handleBlurRed} /> 
            <RgbValue colorName='G' colorValue={green} onChange={handleChangeGreen} onBlur={handleBlurGreen} /> 
            <RgbValue colorName='B' colorValue={blue} onChange={handleChangeBlue} onBlur={handleBlurBlue} /> 
            <Output red={red} green={green} blue={blue} />
        </div>
    );
}

export default Picker;