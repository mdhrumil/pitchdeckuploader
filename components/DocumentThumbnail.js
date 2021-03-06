import React, { useState } from 'react';
import styles from './styles/DocumentThumbnail.module.css'
import { downloadFile } from '../lib/supabaseUtilities'
import Link from 'next/link'


const DocumentThumbnail = (props) => {
    var name = props.data.name;
    
    return (
        <div className = {styles.thumbnailContainer}>
            <Link href="/document/[document]" as = {`/document/${name}`} target="_blank">
                <a>
                    <div className = {styles.thumbnailImage}>{name.substring(0,name.indexOf(".")).toUpperCase()}</div>
                    <div className = {styles.thumbnailText}>
                        <p>{props.data.name.slice(0,25)}</p>
                    </div>
                </a>
            </Link>
        </div>
    );
}

export default DocumentThumbnail;