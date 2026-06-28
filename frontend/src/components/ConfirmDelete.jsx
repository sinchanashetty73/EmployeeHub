const ConfirmDelete = ({
    show,
    handleClose,
    confirmDelete
}) => {

    if (!show) return null;

    return (

<div className="modal d-block" style={{background:"rgba(0,0,0,0.5)"}}>

<div className="modal-dialog">

<div className="modal-content">

<div className="modal-header">

<h5>Delete Employee</h5>

<button
className="btn-close"
onClick={handleClose}
/>

</div>

<div className="modal-body">

<p>

Are you sure you want to delete this employee?

</p>

<div className="text-end">

<button
className="btn btn-secondary me-2"
onClick={handleClose}
>

Cancel

</button>

<button
className="btn btn-danger"
onClick={confirmDelete}
>

Delete

</button>

</div>

</div>

</div>

</div>

</div>

    );

};

export default ConfirmDelete;