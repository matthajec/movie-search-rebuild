import React from 'react'
import Dialog from '@material-ui/core/Dialog';

type FiltersProps = {
  isOpen: boolean,
  close: any
}

const FiltersModal: React.FC<FiltersProps> = ({ isOpen, close }) => {
  return (
    <Dialog open={isOpen} onClose={close}>
      This will house the filters.
    </Dialog>
  )
}

export default FiltersModal