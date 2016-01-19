<?php
class ControllerApp extends Controller {
    public function index() {
        $this->setTemplate([
            'layout.tpl',
            'viewDataRow.tpl',
            'viewCollection.tpl',
            'viewCollectionRow.tpl',
            'viewData.tpl',
            'viewDatabase.tpl',
            'viewDatabaseRow.tpl',
            'filterChips.tpl'
        ]);
        $this->render();
    }
}
