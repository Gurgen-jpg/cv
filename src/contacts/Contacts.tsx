import React from 'react';
import s from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>

            <div className={`${styleContainer.mainContainer} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form name={'new job'} action={'URL'}>
                    <div>
                        <input name={'phoneNumber'}
                               type={'tel'}
                               pattern={"\+7\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}"}
                               placeholder={"+7(___)___-__-__"}
                        />
                    </div>
                    <div>
                        <input name={'email'}
                               type={'email'}
                               pattern={"([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"}
                               placeholder={"email"}
                        />
                    </div>
                    <p>
                        <textarea
                            rows={10}
                            cols={30}
                            name="text"
                            placeholder={'transmittal letter'}>
                        </textarea>
                    </p>
                </form>
                <button className={s.btn} type={"submit"}>Submit</button>
            </div>

        </div>
    );
};

