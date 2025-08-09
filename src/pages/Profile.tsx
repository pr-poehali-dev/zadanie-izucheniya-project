import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import ProfileHeader from '@/components/profile/ProfileHeader';
import OverviewTab from '@/components/profile/OverviewTab';
import AchievementsTab from '@/components/profile/AchievementsTab';
import ActivityTab from '@/components/profile/ActivityTab';
import SkillsTab from '@/components/profile/SkillsTab';
import SettingsTab from '@/components/profile/SettingsTab';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Анна Петрова',
    email: 'anna.petrova@example.com',
    phone: '+7 (999) 123-45-67',
    bio: 'Frontend разработчик с 2-летним опытом. Увлекаюсь React и TypeScript.',
    location: 'Москва, Россия',
    github: 'anna-petrova',
    website: 'https://anna-dev.ru'
  });

  const userStats = {
    totalSolved: 23,
    totalTasks: 35,
    currentRating: 1847,
    weeklyGrowth: 127,
    streak: 12,
    categoriesLearned: 3,
    totalCategories: 4,
    level: 'Продвинутый',
    nextLevel: 'Эксперт',
    progressToNext: 75
  };

  const achievements = [
    { id: 1, name: 'Первые шаги', description: 'Решено 5 заданий', icon: 'Trophy', earned: true, date: '2024-07-15' },
    { id: 2, name: 'Алгоритмист', description: 'Решено 10 алгоритмических задач', icon: 'Code2', earned: true, date: '2024-08-01' },
    { id: 3, name: 'Марафонец', description: '7 дней подряд активности', icon: 'Flame', earned: true, date: '2024-08-05' },
    { id: 4, name: 'Мастер Frontend', description: 'Решено 15 Frontend заданий', icon: 'Monitor', earned: false, progress: 12 },
    { id: 5, name: 'Наставник', description: 'Помощь 5 новичкам', icon: 'Users', earned: false, progress: 2 },
    { id: 6, name: 'Перфекционист', description: '20 идеальных решений', icon: 'Star', earned: false, progress: 8 }
  ];

  const recentActivity = [
    { id: 1, type: 'solved', task: 'Валидация формы', difficulty: 'easy', date: '2024-08-08', points: 50 },
    { id: 2, type: 'achievement', name: 'Марафонец', date: '2024-08-05', points: 100 },
    { id: 3, type: 'solved', task: 'REST API дизайн', difficulty: 'medium', date: '2024-08-04', points: 100 },
    { id: 4, type: 'solved', task: 'Поиск в бинарном дереве', difficulty: 'hard', date: '2024-08-02', points: 200 },
    { id: 5, type: 'solved', task: 'Сортировка массива', difficulty: 'medium', date: '2024-08-01', points: 100 }
  ];

  const skillsProgress = [
    { name: 'JavaScript', level: 85, category: 'frontend' },
    { name: 'React', level: 80, category: 'frontend' },
    { name: 'TypeScript', level: 70, category: 'frontend' },
    { name: 'Алгоритмы', level: 65, category: 'algorithms' },
    { name: 'HTML/CSS', level: 90, category: 'frontend' },
    { name: 'Node.js', level: 45, category: 'backend' }
  ];

  const handleSave = () => {
    setIsEditing(false);
    alert('Профиль сохранён! (Функция пока в разработке)');
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="BookOpen" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">TaskHub</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <Icon name="Home" size={16} className="mr-2" />
                  Главная
                </Button>
              </Link>
              <Button variant="ghost" size="sm">
                <Icon name="Bell" size={16} className="mr-2" />
                Уведомления
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProfileHeader
          profileData={profileData}
          userStats={userStats}
          isEditing={isEditing}
          onEditToggle={handleEditToggle}
        />

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="achievements">Достижения</TabsTrigger>
            <TabsTrigger value="activity">Активность</TabsTrigger>
            <TabsTrigger value="skills">Навыки</TabsTrigger>
            <TabsTrigger value="settings">Настройки</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <OverviewTab achievements={achievements} userStats={userStats} />
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <AchievementsTab achievements={achievements} />
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <ActivityTab recentActivity={recentActivity} />
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <SkillsTab skillsProgress={skillsProgress} />
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <SettingsTab
              profileData={profileData}
              isEditing={isEditing}
              onProfileDataChange={setProfileData}
              onSave={handleSave}
              onEditToggle={handleEditToggle}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;