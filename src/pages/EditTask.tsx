import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const EditTask = () => {
  const [formData, setFormData] = useState({
    title: '',
    discipline: '',
    description: '',
    year: '',
    semester: '',
    directions: [] as string[]
  });

  const [photos, setPhotos] = useState<Array<{ id: string; url: string; name: string; toDelete: boolean }>>([
    { id: '1', url: '/api/placeholder/300/200', name: 'task-image-1.jpg', toDelete: false },
    { id: '2', url: '/api/placeholder/300/200', name: 'task-image-2.jpg', toDelete: false }
  ]);

  const [files, setFiles] = useState<Array<{ id: string; name: string; size: string; toDelete: boolean }>>([
    { id: '1', name: 'методичка.pdf', size: '2.5 МБ', toDelete: false },
    { id: '2', name: 'исходные-данные.xlsx', size: '1.2 МБ', toDelete: false }
  ]);

  const directions = [
    'Информатика и вычислительная техника',
    'Программная инженерия', 
    'Информационные системы',
    'Прикладная математика',
    'Автоматизация технологических процессов',
    'Электроника и наноэлектроника'
  ];

  const years = ['2020', '2021', '2022', '2023', '2024', '2025'];
  const semesters = ['1 семестр', '2 семестр'];

  const handleDirectionChange = (direction: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      directions: checked 
        ? [...prev.directions, direction]
        : prev.directions.filter(d => d !== direction)
    }));
  };

  const togglePhotoDelete = (photoId: string) => {
    setPhotos(prev => prev.map(photo => 
      photo.id === photoId ? { ...photo, toDelete: !photo.toDelete } : photo
    ));
  };

  const toggleFileDelete = (fileId: string) => {
    setFiles(prev => prev.map(file => 
      file.id === fileId ? { ...file, toDelete: !file.toDelete } : file
    ));
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const newPhoto = {
            id: Date.now().toString(),
            url: e.target?.result as string,
            name: file.name,
            toDelete: false
          };
          setPhotos(prev => [...prev, newPhoto]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = event.target.files;
    if (uploadedFiles) {
      Array.from(uploadedFiles).forEach(file => {
        const newFile = {
          id: Date.now().toString(),
          name: file.name,
          size: `${(file.size / 1024 / 1024).toFixed(1)} МБ`,
          toDelete: false
        };
        setFiles(prev => [...prev, newFile]);
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <Icon name="ArrowLeft" size={16} className="mr-2" />
                  Назад
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Редактирование задания</h1>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline">Отменить</Button>
              <Button>Сохранить</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Basic Info */}
        <Card>
          <CardHeader>
            <CardTitle>Основная информация</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Название задания *
                </label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Введите название задания"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Дисциплина *
                </label>
                <Input
                  value={formData.discipline}
                  onChange={(e) => setFormData(prev => ({ ...prev, discipline: e.target.value }))}
                  placeholder="Введите название дисциплины"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Описание задания
              </label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Опишите задание подробно..."
                rows={4}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Год
                </label>
                <Select value={formData.year} onValueChange={(value) => setFormData(prev => ({ ...prev, year: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите год" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map(year => (
                      <SelectItem key={year} value={year}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Семестр
                </label>
                <Select value={formData.semester} onValueChange={(value) => setFormData(prev => ({ ...prev, semester: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите семестр" />
                  </SelectTrigger>
                  <SelectContent>
                    {semesters.map(semester => (
                      <SelectItem key={semester} value={semester}>{semester}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Directions */}
        <Card>
          <CardHeader>
            <CardTitle>Направления обучения</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {directions.map(direction => (
                <div key={direction} className="flex items-center space-x-3">
                  <Checkbox
                    id={direction}
                    checked={formData.directions.includes(direction)}
                    onCheckedChange={(checked) => handleDirectionChange(direction, checked as boolean)}
                  />
                  <label
                    htmlFor={direction}
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    {direction}
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Photos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Фотографии задания</span>
              <div>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                  id="photo-upload"
                />
                <label htmlFor="photo-upload">
                  <Button variant="outline" size="sm" asChild>
                    <span className="cursor-pointer">
                      <Icon name="Upload" size={16} className="mr-2" />
                      Добавить фото
                    </span>
                  </Button>
                </label>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map(photo => (
                <div key={photo.id} className="relative group">
                  <div className={`relative rounded-lg overflow-hidden ${photo.toDelete ? 'opacity-50' : ''}`}>
                    <img
                      src={photo.url}
                      alt={photo.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all" />
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-xs text-gray-600 truncate flex-1">{photo.name}</p>
                    <Button
                      variant={photo.toDelete ? "default" : "destructive"}
                      size="sm"
                      onClick={() => togglePhotoDelete(photo.id)}
                      className="ml-2"
                    >
                      <Icon name={photo.toDelete ? "Undo2" : "Trash2"} size={14} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Files */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Файлы задания</span>
              <div>
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload">
                  <Button variant="outline" size="sm" asChild>
                    <span className="cursor-pointer">
                      <Icon name="Upload" size={16} className="mr-2" />
                      Добавить файлы
                    </span>
                  </Button>
                </label>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {files.map(file => (
                <div
                  key={file.id}
                  className={`flex items-center justify-between p-3 border rounded-lg ${
                    file.toDelete ? 'bg-red-50 border-red-200 opacity-60' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon name="File" size={20} className="text-gray-500" />
                    <div>
                      <p className="font-medium text-gray-900">{file.name}</p>
                      <p className="text-sm text-gray-500">{file.size}</p>
                    </div>
                  </div>
                  <Button
                    variant={file.toDelete ? "default" : "destructive"}
                    size="sm"
                    onClick={() => toggleFileDelete(file.id)}
                  >
                    <Icon name={file.toDelete ? "Undo2" : "Trash2"} size={16} className="mr-2" />
                    {file.toDelete ? "Восстановить" : "Удалить"}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EditTask;