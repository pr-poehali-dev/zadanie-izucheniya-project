import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface ProfileHeaderProps {
  profileData: {
    name: string;
    email: string;
    phone: string;
    bio: string;
    location: string;
    github: string;
    website: string;
  };
  userStats: {
    totalSolved: number;
    totalTasks: number;
    currentRating: number;
    weeklyGrowth: number;
    streak: number;
    categoriesLearned: number;
    totalCategories: number;
    level: string;
    nextLevel: string;
    progressToNext: number;
  };
  isEditing: boolean;
  onEditToggle: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  profileData,
  userStats,
  isEditing,
  onEditToggle
}) => {
  return (
    <div className="mb-8">
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar and Basic Info */}
            <div className="flex flex-col items-center md:items-start">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src="/api/placeholder/96/96" alt="Profile" />
                <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  АП
                </AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{profileData.name}</h1>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
                    {userStats.level}
                  </Badge>
                  <span className="text-sm text-gray-600">→ {userStats.nextLevel}</span>
                </div>
                <p className="text-gray-600 mb-4">{profileData.bio}</p>
                <div className="flex flex-col gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} />
                    {profileData.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Mail" size={16} />
                    {profileData.email}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                <div className="text-2xl font-bold text-green-700">{userStats.totalSolved}</div>
                <div className="text-sm text-green-600">Решено</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                <div className="text-2xl font-bold text-purple-700">{userStats.currentRating}</div>
                <div className="text-sm text-purple-600">Рейтинг</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                <div className="text-2xl font-bold text-orange-700">{userStats.streak}</div>
                <div className="text-sm text-orange-600">Дни подряд</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <div className="text-2xl font-bold text-blue-700">{userStats.categoriesLearned}/{userStats.totalCategories}</div>
                <div className="text-sm text-blue-600">Категории</div>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex items-start">
              <Button 
                onClick={onEditToggle}
                variant={isEditing ? "outline" : "default"}
              >
                <Icon name={isEditing ? "X" : "Edit"} size={16} className="mr-2" />
                {isEditing ? 'Отмена' : 'Редактировать'}
              </Button>
            </div>
          </div>

          {/* Progress to Next Level */}
          <div className="mt-6 pt-6 border-t">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Прогресс до следующего уровня</span>
              <span className="text-sm text-gray-600">{userStats.progressToNext}%</span>
            </div>
            <Progress value={userStats.progressToNext} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileHeader;