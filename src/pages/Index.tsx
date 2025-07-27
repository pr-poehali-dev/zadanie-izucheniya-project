import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tasks = [
    {
      id: 1,
      title: 'Сортировка массива',
      description: 'Реализуйте алгоритм быстрой сортировки на JavaScript',
      difficulty: 'medium',
      category: 'algorithms',
      rating: 4.5,
      solutions: 127,
      completed: false,
      tags: ['JavaScript', 'Алгоритмы', 'Сортировка']
    },
    {
      id: 2,
      title: 'Поиск в бинарном дереве',
      description: 'Найдите элемент в бинарном дереве поиска',
      difficulty: 'hard',
      category: 'data-structures',
      rating: 4.8,
      solutions: 89,
      completed: true,
      tags: ['Python', 'Структуры данных', 'Деревья']
    },
    {
      id: 3,
      title: 'Валидация формы',
      description: 'Создайте компонент React для валидации формы регистрации',
      difficulty: 'easy',
      category: 'frontend',
      rating: 4.2,
      solutions: 245,
      completed: false,
      tags: ['React', 'Frontend', 'Валидация']
    },
    {
      id: 4,
      title: 'REST API дизайн',
      description: 'Спроектируйте RESTful API для системы управления задачами',
      difficulty: 'medium',
      category: 'backend',
      rating: 4.6,
      solutions: 156,
      completed: false,
      tags: ['API', 'Backend', 'REST']
    }
  ];

  const categories = [
    { id: 'algorithms', name: 'Алгоритмы', icon: 'Code2', count: 45 },
    { id: 'data-structures', name: 'Структуры данных', icon: 'Database', count: 32 },
    { id: 'frontend', name: 'Frontend', icon: 'Monitor', count: 67 },
    { id: 'backend', name: 'Backend', icon: 'Server', count: 41 }
  ];

  const leaderboard = [
    { name: 'Анна Петрова', score: 2847, avatar: '👩‍💻' },
    { name: 'Михаил Иванов', score: 2693, avatar: '👨‍💻' },
    { name: 'Елена Сидорова', score: 2541, avatar: '👩‍🔬' },
    { name: 'Александр Козлов', score: 2398, avatar: '👨‍🎓' }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'hard': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'Легко';
      case 'medium': return 'Средне';
      case 'hard': return 'Сложно';
      default: return difficulty;
    }
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'all' || task.difficulty === selectedDifficulty;
    const matchesCategory = selectedCategory === 'all' || task.category === selectedCategory;
    
    return matchesSearch && matchesDifficulty && matchesCategory;
  });

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
                <Icon name="Bell" size={16} className="mr-2" />
                Уведомления
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Профиль
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Решай. Учись. Развивайся.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto animate-fade-in">
              Платформа для изучения программирования через практические задания и проекты
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
                <Icon name="Play" size={20} className="mr-2" />
                Начать решать
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="tasks" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4 mb-8">
            <TabsTrigger value="tasks" className="flex items-center gap-2">
              <Icon name="CheckSquare" size={16} />
              Задания
            </TabsTrigger>
            <TabsTrigger value="categories" className="flex items-center gap-2">
              <Icon name="Grid3X3" size={16} />
              Категории
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="flex items-center gap-2">
              <Icon name="Trophy" size={16} />
              Рейтинг
            </TabsTrigger>
            <TabsTrigger value="stats" className="flex items-center gap-2">
              <Icon name="BarChart3" size={16} />
              Статистика
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tasks" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Filter" size={20} />
                  Фильтры и поиск
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Поиск заданий..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                    <SelectTrigger className="w-full lg:w-48">
                      <SelectValue placeholder="Сложность" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все уровни</SelectItem>
                      <SelectItem value="easy">Легко</SelectItem>
                      <SelectItem value="medium">Средне</SelectItem>
                      <SelectItem value="hard">Сложно</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full lg:w-48">
                      <SelectValue placeholder="Категория" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все категории</SelectItem>
                      <SelectItem value="algorithms">Алгоритмы</SelectItem>
                      <SelectItem value="data-structures">Структуры данных</SelectItem>
                      <SelectItem value="frontend">Frontend</SelectItem>
                      <SelectItem value="backend">Backend</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Tasks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTasks.map((task) => (
                <Card key={task.id} className="hover:shadow-lg transition-all duration-200 hover-scale">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{task.title}</CardTitle>
                      {task.completed && (
                        <Icon name="CheckCircle" size={20} className="text-green-500" />
                      )}
                    </div>
                    <CardDescription className="text-sm">
                      {task.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge className={getDifficultyColor(task.difficulty)}>
                          {getDifficultyText(task.difficulty)}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                          {task.rating}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {task.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Icon name="Users" size={14} />
                          {task.solutions} решений
                        </span>
                      </div>
                      
                      <Button className="w-full" variant={task.completed ? "outline" : "default"}>
                        {task.completed ? "Пересмотреть" : "Решить"}
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="categories" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Card key={category.id} className="hover:shadow-lg transition-all duration-200 hover-scale cursor-pointer">
                  <CardHeader className="text-center pb-2">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                      <Icon name={category.icon as any} size={32} className="text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-2xl font-bold text-purple-600 mb-2">{category.count}</p>
                    <p className="text-sm text-gray-600">заданий</p>
                    <Button className="w-full mt-4" variant="outline">
                      Изучать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Trophy" size={24} className="text-yellow-500" />
                  Топ программистов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((user, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="text-2xl font-bold text-gray-500 w-8">
                        #{index + 1}
                      </div>
                      <div className="text-2xl">{user.avatar}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{user.name}</h3>
                        <p className="text-sm text-gray-600">{user.score} очков</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Award" size={16} className="text-purple-600" />
                        <span className="font-semibold text-purple-600">{user.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Решено заданий</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">23</div>
                  <Progress value={65} className="mt-2" />
                  <p className="text-xs text-gray-600 mt-2">из 35 заданий</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Текущий рейтинг</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">1,847</div>
                  <div className="flex items-center mt-2 text-green-600">
                    <Icon name="TrendingUp" size={16} className="mr-1" />
                    <span className="text-sm">+127 за неделю</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Изучено категорий</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <Progress value={75} className="mt-2" />
                  <p className="text-xs text-gray-600 mt-2">из 4 категорий</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Дни подряд</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">12</div>
                  <div className="flex items-center mt-2 text-orange-600">
                    <Icon name="Flame" size={16} className="mr-1" />
                    <span className="text-sm">Серия активности</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;