import { Button } from '@/components/ui/button';
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createItem, updateItem } from '@/controllers/items';
import { useState } from 'react';
import { toast } from 'sonner';

export function ItemDialog({ item, isEditing, onSuccess }) {
  const { id } = item || {};
  const [formData, setFormData] = useState({
    name: item?.name || '',
    description: item?.description || '',
    quantity: item?.quantity || '',
    price: item?.price || ''
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async () => {
    try {
      if (isEditing) {
        await updateItem({ id, ...formData });
        console.log('Updated item:', { id, ...formData });
      } else {
        await createItem(formData);
        console.log('Created item:', formData);
      }
      if (onSuccess) onSuccess();
      toast.success('Item saved successfully!');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to save item: ' + error.message);
    }
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>
          {isEditing ? 'Edit' : 'Create'} Item {id ? '- ' + id : ''}
        </DialogTitle>
        <DialogDescription>Make changes to your item here. Click save when you're done.</DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" placeholder="Mie goreng" value={formData.name} onChange={handleChange} className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="description" className="text-right">
            Description
          </Label>
          <Input id="description" placeholder="Mie goreng terenak adalah mie..." value={formData.description} onChange={handleChange} className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="quantity" className="text-right">
            Quantity
          </Label>
          <Input id="quantity" placeholder="1" value={formData.quantity} onChange={handleChange} className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="price" className="text-right">
            Price
          </Label>
          <Input id="price" placeholder="1000" value={formData.price} onChange={handleChange} className="col-span-3" />
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" onClick={handleSubmit}>
            Save changes
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}
