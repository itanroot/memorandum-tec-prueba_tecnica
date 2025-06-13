import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
} from "@material-tailwind/react";
interface Props {
    open: boolean
    onClose: () => void
    item: {
        title: string
        description: string
        releaseYear: number
        images: {
            "Poster Art": {
                url: string
                width: number
                height: number
            }
        }
    } | null
}
export function DialogDefault({ open, onClose, item }: Props) {
    if (!item) return null;

    return (
        <Dialog open={open} handler={onClose}>
            <DialogHeader>{item?.title}</DialogHeader>
            <DialogBody className="h-full">
                <div className="flex justify-center mb-4 h-[15rem]">
                    <img
                        src={item?.images?.["Poster Art"]?.url ?? '/images/placeholder.png'}
                        alt="card-image"
                        className='object-contain w-full h-full rounded-lg'
                    />
                </div>
                <Typography color="gray" className="mb-8 font-normal">
                    {item?.description}
                </Typography>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                    releaseYear: {item?.releaseYear}
                </Typography>
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    onClick={onClose}
                    className="mr-1"
                >
                    <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="green" onClick={onClose}>
                    <span>View more</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
}