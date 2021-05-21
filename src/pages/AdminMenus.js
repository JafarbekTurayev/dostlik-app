import React, {useEffect} from 'react';
import AdminLayout from "../components/AdminLayout";
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {connect} from "react-redux";
import {updateState, addMenu, deleteMenu, getMenus, getAllMenus, editMenu} from "../redux/actions/menusAction";
import {AvField, AvForm} from "availity-reactstrap-validation";

const AdminMenus = (props) => {

    useEffect(() => {
        console.log("Ishla!")
        console.log(props)
        props.getAllMenus();
    }, [])

    const saveMenu = (event, errors, values) => {
        console.log(values)
        if (props.selectedMenu == null) {
            console.log("add")
            props.addMenu(values);
        } else {
            let obj = {
                id: props.selectedMenu.id,
                // nameUz: values.nameUz //2-variant
                ...values
            }
            console.log("edit")
            props.editMenu(obj);
        }
    }

    return (
        <AdminLayout>
            {/*<h5>Menus Page</h5>*/}
            <div className="container">
                <div className="row">
                    <h5>Menus Page {console.log(props.menus)}</h5>
                    <div className="col-3 offset-10">
                        <button type="button" className="btn btn-success" onClick={() => {
                            props.updateState({modalOpen: true})
                        }}>Add
                        </button>
                    </div>
                </div>

                <div className="row">
                    {props.menus.map((item, id) => {
                        return <div className="col-3" key={id}>
                            <div className="card">
                                <div className="card-body bg-success">
                                    <h1 className="text-white">{item.nameUz}</h1>
                                    <h1 className="text-white">{item.url}</h1>
                                    <a href="">Batafsil</a>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-warning"
                                            onClick={() => props.updateState({
                                                selectedMenu: item,
                                                modalOpen: true
                                            })}>EDIT
                                    </button>
                                    <button className="btn btn-danger" onClick={() => props.deleteMenu(item.id)}>DELETE
                                    </button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>

            <Modal isOpen={props.modalOpen}>
                <AvForm onSubmit={saveMenu}>
                    <ModalBody>
                        <AvField name="nameUz" defaultValue={props.selectedMenu.nameUz} type="text"
                                 placeholder="Uzbekcha nomini kirit"/>
                        <AvField name="nameRu" defaultValue={props.selectedMenu.nameRu} type="text"
                                 placeholder="Ruscha nomini kirit"/>
                        <AvField name="nameEn" defaultValue={props.selectedMenu.nameEn} type="text"
                                 placeholder="Inglizcha nomini kirit"/>
                        <AvField name="url" defaultValue={props.selectedMenu.url} type="text" placeholder="url kirit"/>
                        <AvField type="checkbox"
                                 defaultValue={props.selectedMenu.submenu} name="submenu">SubMenu</AvField>

                        {/*<AvField type="select" name="parentId" label="Menular ro'yxati">*/}
                        {/*    <option value="1">Jamiyat Haqida</option>*/}
                        {/*    <option value="2">Struktura</option>*/}
                        {/*    <option value="3">Yangiliklar</option>*/}
                        {/*    <option>Elektron murojaatlar</option>*/}
                        {/*    <option>Interaktiv xizmatlar</option>*/}
                        {/*    <option>Aloqa</option>*/}
                        {/*</AvField>*/}

                        <AvField name="parentId" type="select" label="Parent menu">
                            {/*<option value="">Submenu tanlang</option>*/}
                            {props.menus.map((item) => (
                                <option
                                    value={item.id}>{item.nameUz}</option>
                            ))}
                        </AvField>
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-success" type="submit">Save</button>
                        <button className="btn btn-danger" type="button" onClick={() =>
                            props.updateState({modalOpen: false, selectedMenu: {}})}>Cancel
                        </button>
                    </ModalFooter>
                </AvForm>
            </Modal>

        </AdminLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        modalOpen: state.menus.modalOpen,
        menus: state.menus.menus,
        selectedMenu: state.menus.selectedMenu
        //statelar qo'shiladi
    }
}
export default connect(mapStateToProps, {
    updateState,
    addMenu,
    deleteMenu,
    getMenus,
    editMenu,
    getAllMenus
})(AdminMenus);