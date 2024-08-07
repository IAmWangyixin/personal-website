import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { formatBytes } from '../../utils/bytes';

const Tools = () => {
    const [size, setSize] = useState<string | number>('');
    const [formatSize, setFormatSize] = useState('');

    const handleChange = (e) => {
        if (e.target.value) {
            setSize(parseInt(e.target.value, 10))
        }else {
            setSize('')
        }
    }

    const handleClick = () => {
        setFormatSize(formatBytes(size))
    }

    return (
        <div>
            Tools
            <h1>实用功能列表：</h1>
            <h2>1. 计算机单位转换：</h2>
            <Input placeholder="Basic usage" value={size} onChange={handleChange} />
            <Button onClick={handleClick}>转换</Button>
            <span>{formatSize}</span>
        </div>
    );
};

export default Tools;