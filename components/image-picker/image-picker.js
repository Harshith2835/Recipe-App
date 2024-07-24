'use client'
import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image'
export default function ImagePicker({label,name}){
    const [pickedImage,setPickedImage]=useState()
    const imageInputRef=useRef()
    function handleclick(){
        imageInputRef.current.click()
    }
    function handleImagechange(event){
        const file=event.target.files[0]
        if(!file){
            return
        }
        const filereader=new FileReader();
        filereader.onload=()=>{
            setPickedImage(filereader.result)
        }
        filereader.readAsDataURL(file)
    }
    return(
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <h5>No image picked yet</h5>}
                    {pickedImage && <Image src={pickedImage} fill/>}
                </div>
                <input className={classes.input} type='file' id={name} accept='image/png,image/jpeg' name={name} ref={imageInputRef} onChange={handleImagechange}></input>
                <button className={classes.button} type='button' onClick={handleclick}>
                    Pick an Image
                </button>
            </div>
        </div>
    )
}