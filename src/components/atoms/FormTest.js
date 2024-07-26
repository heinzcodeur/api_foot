const FormTest = () => {
  return (
    <div className="container">
        <style>
                                                {`
          .form-group input[type="checkbox"] {
            display: none;
          }
          .form-group input[type="checkbox"] + .btn-group > label span {
            width: 20px;
          }
          .form-group input[type="checkbox"] + .btn-group > label span:first-child {
            display: none;
          }
          .form-group input[type="checkbox"] + .btn-group > label span:last-child {
            display: inline-block;
          }
          .form-group input[type="checkbox"]:checked + .btn-group > label span:first-child {
            display: inline-block;
          }
          .form-group input[type="checkbox"]:checked + .btn-group > label span:last-child {
            display: none;
          }
        `}
        </style>
    <div className="[ row ]">
        <h2>Fancy Bootstrap Checkboxes that work with <a href="https://bootswatch.com/" target="_blank">Bootswatch</a></h2>
        <p>My latest project needed some checkboxes that worked very nicely with bootswatch. Use the Theme picker above here to check out what the checkboxes look like in the different themes.</p>
    </div>
    <div className="[ col-xs-12 col-sm-6 ]">
        <h3>Standard Checkboxes</h3><hr />
        <div className="[ form-group ]">
            <input type="checkbox" name="fancy-checkbox-default" id="fancy-checkbox-default" autocomplete="off" />
            <div className="[ btn-group ]">
                <label for="fancy-checkbox-default" className="[ btn btn-default ]">
                    <span className="[ glyphicon glyphicon-ok ]"></span>
                    <span> </span>
                </label>
                <label for="fancy-checkbox-default" className="[ btn btn-default active ]">
                    Default Checkbox
                </label>
            </div>
        </div>
        <div className="[ form-group ]">
            <input type="checkbox" name="fancy-checkbox-primary" id="fancy-checkbox-primary" autocomplete="off" />
            <div className="[ btn-group ]">
                <label for="fancy-checkbox-primary" className="[ btn btn-primary ]">
                    <span className="[ glyphicon glyphicon-ok ]"></span>
                    <span> </span>
                </label>
                <label for="fancy-checkbox-primary" className="[ btn btn-default active ]">
                    Primary Checkbox
                </label>
            </div>
        </div>
        <div className="[ form-group ]">
            <input type="checkbox" name="fancy-checkbox-success" id="fancy-checkbox-success" autocomplete="off" />
            <div className="[ btn-group ]">
                <label for="fancy-checkbox-success" className="[ btn btn-success ]">
                    <span className="[ glyphicon glyphicon-ok ]"></span>
                    <span> </span>
                </label>
                <label for="fancy-checkbox-success" className="[ btn btn-default active ]">
                    Success Checkbox
                </label>
            </div>
        </div>
        <div className="[ form-group ]">
            <input type="checkbox" name="fancy-checkbox-info" id="fancy-checkbox-info" autocomplete="off" />
            <div className="[ btn-group ]">
                <label for="fancy-checkbox-info" className="[ btn btn-info ]">
                    <span className="[ glyphicon glyphicon-ok ]"></span>
                    <span> </span>
                </label>
                <label for="fancy-checkbox-info" className="[ btn btn-default active ]">
                    Info Checkbox
                </label>
            </div>
        </div>
        <div className="[ form-group ]">
            <input type="checkbox" name="fancy-checkbox-warning" id="fancy-checkbox-warning" autocomplete="off" />
            <div className="[ btn-group ]">
                <label for="fancy-checkbox-warning" className="[ btn btn-warning ]">
                    <span className="[ glyphicon glyphicon-ok ]"></span>
                    <span> </span>
                </label>
                <label for="fancy-checkbox-warning" className="[ btn btn-default active ]">
                    Warning Checkbox
                </label>
            </div>
        </div>
        <div className="[ form-group ]">
            <input type="checkbox" name="fancy-checkbox-danger" id="fancy-checkbox-danger" autocomplete="off" />
            <div className="[ btn-group ]">
                <label for="fancy-checkbox-danger" className="[ btn btn-danger ]">
                    <span className="[ glyphicon glyphicon-ok ]"></span>
                    <span> </span>
                </label>
                <label for="fancy-checkbox-danger" className="[ btn btn-default active ]">
                    Danger Checkbox
                </label>
            </div>
        </div>
    </div>

    <div className="[ col-xs-12 col-sm-6 ]">
        <h3>Custom Icons Checkboxes</h3><hr />
        <div className="[ form-group ]">
            <input type="checkbox" name="fancy-checkbox-default-custom-icons" id="fancy-checkbox-default-custom-icons" autocomplete="off" />
            <div className="[ btn-group ]">
                <label for="fancy-checkbox-default-custom-icons" className="[ btn btn-default ]">
                    <span className="[ glyphicon glyphicon-plus ]"></span>
                    <span className="[ glyphicon glyphicon-minus ]"></span>
                </label>
                <label for="fancy-checkbox-default-custom-icons" className="[ btn btn-default active ]">
                    Default Checkbox
                </label>
            </div>
        </div>
        <div className="[ form-group ]">
            <input type="checkbox" name="fancy-checkbox-primary-custom-icons" id="fancy-checkbox-primary-custom-icons" autocomplete="off" />
            <div className="[ btn-group ]">
                <label for="fancy-checkbox-primary-custom-icons" className="[ btn btn-primary ]">
                    <span className="[ glyphicon glyphicon-plus ]"></span>
                    <span className="[ glyphicon glyphicon-minus ]"></span>
                </label>
                <label for="fancy-checkbox-primary-custom-icons" className="[ btn btn-default active ]">
                    Primary Checkbox
                </label>
            </div>
        </div>
        <div className="[ form-group ]">
            <input type="checkbox" name="fancy-checkbox-success-custom-icons" id="fancy-checkbox-success-custom-icons" autocomplete="off" />
            <div className="[ btn-group ]">
                <label for="fancy-checkbox-success-custom-icons" className="[ btn btn-success ]">
                    <span className="[ glyphicon glyphicon-plus ]"></span>
                    <span className="[ glyphicon glyphicon-minus ]"></span>
                </label>
                <label for="fancy-checkbox-success-custom-icons" className="[ btn btn-default active ]">
                    Success Checkbox
                </label>
            </div>
        </div>
        <div className="[ form-group ]">
            <input type="checkbox" name="fancy-checkbox-info-custom-icons" id="fancy-checkbox-info-custom-icons" autocomplete="off" />
            <div className="[ btn-group ]">
                <label for="fancy-checkbox-info-custom-icons" className="[ btn btn-info ]">
                    <span className="[ glyphicon glyphicon-plus ]"></span>
                    <span className="[ glyphicon glyphicon-minus ]"></span>
                </label>
                <label for="fancy-checkbox-info-custom-icons" className="[ btn btn-default active ]">
                    Info Checkbox
                </label>
            </div>
        </div>
        <div className="[ form-group ]">
            <input type="checkbox" name="fancy-checkbox-warning-custom-icons" id="fancy-checkbox-warning-custom-icons" autocomplete="off" />
            <div className="[ btn-group ]">
                <label for="fancy-checkbox-warning-custom-icons" className="[ btn btn-warning ]">
                    <span className="[ glyphicon glyphicon-plus ]"></span>
                    <span className="[ glyphicon glyphicon-minus ]"></span>
                </label>
                <label for="fancy-checkbox-warning-custom-icons" className="[ btn btn-default active ]">
                    Warning Checkbox
                </label>
            </div>
        </div>
        <div className="[ form-group ]">
            <input type="checkbox" name="fancy-checkbox-danger-custom-icons" id="fancy-checkbox-danger-custom-icons" autocomplete="off" />
            <div className="[ btn-group ]">
                <label for="fancy-checkbox-danger-custom-icons" className="[ btn btn-danger ]">
                    <span className="[ glyphicon glyphicon-plus ]"></span>
                    <span className="[ glyphicon glyphicon-minus ]"></span>
                </label>
                <label for="fancy-checkbox-danger-custom-icons" className="[ btn btn-default active ]">
                    Danger Checkbox
                </label>
            </div>
        </div>
    </div>
</div>
)};


export default FormTest;