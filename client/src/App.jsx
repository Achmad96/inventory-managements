import React, { useEffect, useState, useCallback } from 'react';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { DataTable } from '@/components/ui/data-table';
import { getItems } from '@/controllers/items';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { getColumns } from '@/columns';
import { Button } from './components/ui/button';
import { Dialog } from '@radix-ui/react-dialog';
import { DialogTrigger } from '@/components/ui/dialog';
import { ItemDialog } from '@/components/item-dialog';
import { toast, Toaster } from 'sonner';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getItems();
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
      toast.error('Error fetching items' + error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  if (loading && items.length === 0) {
    return <div className="container mx-auto p-52">Loading...</div>;
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <nav className="flex items-center justify-between p-4 shadow">
        <h3 className="text-xl font-bold">Inventory Managements</h3>
        <ModeToggle />
      </nav>
      <Toaster position="bottom-right" richColors />
      <main className="container mx-auto lg:p-52 md:p-3">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Items</h1>
        </div>
        <div className="mb-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Create Item</Button>
            </DialogTrigger>
            <ItemDialog item={{}} isEditing={false} onSuccess={fetchItems} />
          </Dialog>
        </div>
        <DataTable columns={getColumns(fetchItems)} data={items} />
      </main>
    </ThemeProvider>
  );
}

export default App;
