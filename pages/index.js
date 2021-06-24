import React from 'react';
import Head from 'next/head'

import Table from './../src/components/Table';
import AddModule from './../src/components/AddModule';
import SuccessAlert from './../src/components/SuccessAlert';


export default function Home() {

    const [list, setList] = React.useState([]);
    const [checkboxes, setCheckboxes] = React.useState([]);
    const [isAddModuleVisible, setIsAddModuleVisible] = React.useState(false);
    const [isSuccessAlertVisible, setIsSuccessAlertVisible] = React.useState(false);

    React.useEffect(() => {
        (async () => {
            const response = await fetch('/api/get');
            const data = await response.json();
            setList(data.list);
        })();
    }, []);

    const checkboxesChangeHandler = (idx) => {
        let newCheckboxes = [...checkboxes];

        if (Array.isArray(idx)) {
            idx.forEach((item) => {
                if (newCheckboxes.includes(item)) newCheckboxes.splice(newCheckboxes.indexOf(item), 1);
                else newCheckboxes.push(item);
            });
        }
        else if (newCheckboxes.includes(idx)) newCheckboxes.splice(newCheckboxes.indexOf(idx), 1);
        else newCheckboxes.push(idx);

        setCheckboxes(newCheckboxes);
    }

    const inputChangeHandler = (idx, field, value) => {
        let newList = [...list];
        newList[idx][field] = value;
        setList(newList);
    }

    const addItemHandler = (item) => {
        let newList = [...list];
        newList.push(item);
        setList(newList);
    }

    const deleteItemsHandler = () => {
        let newList = [];

        list.forEach((item, idx) => {
            if (checkboxes.includes(idx)) return;
            newList.push(item);
        })

        setList(newList);
        setCheckboxes([]);
    }

    const submitHandler = async () => {
        console.log('list:', list);
        console.log('typeof list: ', typeof list);
        console.log('checkboxes:', checkboxes);

        const response = await fetch('/api/update', {
            method: 'POST',
            body: JSON.stringify(list)
        });

        const resData = await response.json();
        if(resData.success) setIsSuccessAlertVisible(true); 
    }

    return (
        <div>
            <Head>
                <title>IPTV List Editor</title>
                <meta name="description" content="Generate your own iptv list and edit it whenever you need it." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='main-wrapper'>
                <div className='buttons-wrapper'>
                    <button onClick={() => setIsAddModuleVisible(true)}><span>+</span> Add</button>
                    <button onClick={deleteItemsHandler}><span>-</span> Delete</button>
                    <button onClick={submitHandler}>Save</button>
                </div>

                <Table list={list} inputChangeHandler={inputChangeHandler} checkboxes={checkboxes} onCheckboxChange={checkboxesChangeHandler} />
            </div>

            <AddModule
                isVisible={isAddModuleVisible}
                onClose={() => setIsAddModuleVisible(false)}
                onSubmit={addItemHandler}
            />

            <SuccessAlert isVisible={isSuccessAlertVisible} hide={() => setIsSuccessAlertVisible(false)} />
        </div>
    );
}
