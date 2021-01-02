import React from 'react';
import { useState, useEffect } from 'react'
import { Table, Tag, Space } from 'antd';
import  HelloWorld  from './HelloWorld'


export default () => {


  const Demo = (props: any) => {
    return <div>{props.children}</div>
  }

  return (
    <Demo>
      <HelloWorld />
    </Demo>
  );
}
