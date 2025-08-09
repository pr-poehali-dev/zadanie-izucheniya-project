import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'solved': return 'CheckCircle';
      case 'achievement': return 'Trophy';
      default: return 'Activity';
    }
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
              <Button variant="ghost" size="sm">
                <Icon name="Home" size={16} className="mr-2" />
                Главная
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Bell" size={16} className="mr-2" />
                Уведомления
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
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
                    onClick={() => setIsEditing(!isEditing)}
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

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="achievements">Достижения</TabsTrigger>
            <TabsTrigger value="activity">Активность</TabsTrigger>
            <TabsTrigger value="skills">Навыки</TabsTrigger>
            <TabsTrigger value="settings">Настройки</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Trophy" size={20} className="text-yellow-500" />
                    Недавние достижения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {achievements.filter(a => a.earned).slice(0, 3).map((achievement) => (
                      <div key={achievement.id} className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                        <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                          <Icon name={achievement.icon as any} size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{achievement.name}</h4>
                          <p className="text-sm text-gray-600">{achievement.description}</p>
                        </div>
                        <div className="text-xs text-gray-500">{achievement.date}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Learning Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} className="text-blue-500" />
                    Прогресс обучения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Решено заданий</span>
                        <span className="text-sm text-gray-600">{userStats.totalSolved}/{userStats.totalTasks}</span>
                      </div>
                      <Progress value={(userStats.totalSolved / userStats.totalTasks) * 100} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Изучено категорий</span>
                        <span className="text-sm text-gray-600">{userStats.categoriesLearned}/{userStats.totalCategories}</span>
                      </div>
                      <Progress value={(userStats.categoriesLearned / userStats.totalCategories) * 100} />
                    </div>
                    <div className="pt-2 border-t">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-green-600 font-medium">Рост за неделю</span>
                        <span className="text-green-600 font-bold">+{userStats.weeklyGrowth} очков</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <Card key={achievement.id} className={`transition-all ${achievement.earned ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200' : 'bg-gray-50 border-gray-200'}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        achievement.earned 
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-400' 
                          : 'bg-gray-300'
                      }`}>
                        <Icon name={achievement.icon as any} size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className={`text-lg ${achievement.earned ? 'text-gray-900' : 'text-gray-500'}`}>
                          {achievement.name}
                        </CardTitle>
                        {achievement.earned && (
                          <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                            Получено {achievement.date}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-3">
                      {achievement.description}
                    </CardDescription>
                    {!achievement.earned && achievement.progress && (
                      <div>
                        <div className="flex justify-between mb-1 text-xs">
                          <span>Прогресс</span>
                          <span>{achievement.progress}/{achievement.name === 'Мастер Frontend' ? 15 : achievement.name === 'Наставник' ? 5 : 20}</span>
                        </div>
                        <Progress value={(achievement.progress / (achievement.name === 'Мастер Frontend' ? 15 : achievement.name === 'Наставник' ? 5 : 20)) * 100} className="h-2" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Activity" size={20} />
                  Последняя активность
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                        <Icon name={getActivityIcon(activity.type) as any} size={20} className="text-purple-600" />
                      </div>
                      <div className="flex-1">
                        {activity.type === 'solved' ? (
                          <div>
                            <h4 className="font-semibold">Решена задача: {activity.task}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge className={`text-xs ${getDifficultyColor(activity.difficulty)}`}>
                                {activity.difficulty === 'easy' ? 'Легко' : activity.difficulty === 'medium' ? 'Средне' : 'Сложно'}
                              </Badge>
                              <span className="text-sm text-gray-600">+{activity.points} очков</span>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <h4 className="font-semibold">Получено достижение: {activity.name}</h4>
                            <span className="text-sm text-gray-600">+{activity.points} очков</span>
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-gray-500">{activity.date}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Brain" size={20} />
                  Прогресс по навыкам
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {skillsProgress.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
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
                      onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Местоположение</Label>
                    <Input
                      id="location"
                      value={profileData.location}
                      onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="github">GitHub</Label>
                    <Input
                      id="github"
                      value={profileData.github}
                      onChange={(e) => setProfileData({...profileData, github: e.target.value})}
                      disabled={!isEditing}
                      placeholder="username"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="website">Веб-сайт</Label>
                    <Input
                      id="website"
                      value={profileData.website}
                      onChange={(e) => setProfileData({...profileData, website: e.target.value})}
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
                    onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                    disabled={!isEditing}
                    placeholder="Расскажите о себе..."
                  />
                </div>
                
                {isEditing && (
                  <div className="flex gap-4 pt-4">
                    <Button onClick={handleSave}>
                      <Icon name="Save" size={16} className="mr-2" />
                      Сохранить изменения
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;