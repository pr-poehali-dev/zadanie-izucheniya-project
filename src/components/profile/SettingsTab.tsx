import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  bio: string;
  location: string;
  github: string;
  website: string;
}

interface SettingsTabProps {
  profileData: ProfileData;
  isEditing: boolean;
  onProfileDataChange: (data: ProfileData) => void;
  onSave: () => void;
  onEditToggle: () => void;
}

const SettingsTab: React.FC<SettingsTabProps> = ({
  profileData,
  isEditing,
  onProfileDataChange,
  onSave,
  onEditToggle
}) => {
  const handleInputChange = (field: keyof ProfileData, value: string) => {
    onProfileDataChange({
      ...profileData,
      [field]: value
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Настройки профиля</CardTitle>
          <CardDescription>
            Обновите информацию о себе
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Имя и фамилия</Label>
              <Input
                id="name"
                value={profileData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={profileData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input
                id="phone"
                value={profileData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Местоположение</Label>
              <Input
                id="location"
                value={profileData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="github">GitHub</Label>
              <Input
                id="github"
                value={profileData.github}
                onChange={(e) => handleInputChange('github', e.target.value)}
                disabled={!isEditing}
                placeholder="username"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="website">Веб-сайт</Label>
              <Input
                id="website"
                value={profileData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                disabled={!isEditing}
                placeholder="https://yoursite.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="bio">О себе</Label>
            <Input
              id="bio"
              value={profileData.bio}
              onChange={(e) => handleInputChange('bio', e.target.value)}
              disabled={!isEditing}
              placeholder="Расскажите о себе..."
            />
          </div>
          
          {isEditing && (
            <div className="flex gap-4 pt-4">
              <Button onClick={onSave}>
                <Icon name="Save" size={16} className="mr-2" />
                Сохранить изменения
              </Button>
              <Button variant="outline" onClick={onEditToggle}>
                Отмена
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-red-600">Опасная зона</CardTitle>
          <CardDescription>
            Необратимые действия с аккаунтом
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg">
              <div>
                <h4 className="font-semibold text-red-800">Удалить аккаунт</h4>
                <p className="text-sm text-red-600">Все данные будут безвозвратно удалены</p>
              </div>
              <Button variant="destructive" size="sm">
                Удалить аккаунт
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsTab;