import React from 'react';
import { userDTO } from './auth.models';
import IndexEntity from '../Utils/IndexEntity';
import { urlAccounts } from '../endpoints';
import customConfirm from '../Utils/customConfirm';
import Button from '../Utils/Button';


    export default function IndexUsers() {

        async function makeClient(id: string) {
        }

        async function removeClient(id: string) {
        }

    return (
        <IndexEntity<userDTO>
            title="Clients"
            url={`${urlAccounts}/listUsers`}
        >
            {user => <>
                <thead>
                    <th></th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {user.map(user => <tr key={user.id}>
                        <td>
                            <Button
                            onClick={()  => customConfirm(() => makeClient(user.id),
                                `Do you want to make ${user.email} a client?`, 
                                "Yes")}
                            >Make Client</Button>

                            <Button
                            onClick={()  => customConfirm(() => removeClient(user.id),
                                `Do you want to remove ${user.email} as a client?`, 
                                "Yes")}
                            >Remove Client</Button>
                        </td>
                        <td>
                            {user.email}
                        </td>
                    </tr>)}
                </tbody>
            </>}
        </IndexEntity>
    )
}