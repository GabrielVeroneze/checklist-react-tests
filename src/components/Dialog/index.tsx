import { useEffect, useRef } from 'react'
import { IconClose } from '@/components/icons'
import './dialog.module.css'

interface DialogProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
    const refDialog = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
        if (!refDialog.current) return

        if (isOpen) {
            refDialog.current.showModal()
        } else {
            refDialog.current.close()
        }
    }, [isOpen])

    useEffect(() => {
        const dialog = refDialog.current
        if (!dialog) return

        dialog.addEventListener('close', onClose)

        return () => {
            dialog.removeEventListener('close', onClose)
        }
    }, [onClose])

    return (
        <>
            <dialog ref={refDialog} className="dialog">
                <div className="actions">
                    <button autoFocus onClick={onClose} className="btn-close">
                        <IconClose />
                    </button>
                </div>
                {children}
            </dialog>
        </>
    )
}

export default Dialog
