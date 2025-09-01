import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const CallbackForm = ({ title, buttonText }: { title: string; buttonText: string }) => (
    <div className="space-y-4 p-4">
      <div className="space-y-2">
        <Label htmlFor="phone">Номер телефона</Label>
        <Input id="phone" placeholder="+7 (___) ___-__-__" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Имя</Label>
        <Input id="name" placeholder="Ваше имя" />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="agreement" />
        <Label htmlFor="agreement" className="text-sm text-muted-foreground">
          Я принимаю условия передачи информации
        </Label>
      </div>
      <Button className="w-full bg-construction-orange hover:bg-construction-orange/90">
        {buttonText}
      </Button>
    </div>
  );

  const ProjectCard = ({ title, price, image }: { title: string; price: string; image: string }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-heading font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">от {price}</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-construction-orange hover:bg-construction-orange/90">
              Стоимость строительства
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{title} - Подробная информация</DialogTitle>
            </DialogHeader>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img src={image} alt={title} className="w-full rounded-lg mb-4" />
                <div className="space-y-2">
                  <h4 className="font-semibold">Характеристики дома:</h4>
                  <div className="text-sm space-y-1">
                    <p>• Площадь: 120 м²</p>
                    <p>• Материал стен: кирпич</p>
                    <p>• Фундамент: ленточный</p>
                    <p>• Крыша: металлочерепица</p>
                    <p>• Этажность: 2 этажа</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-heading text-xl">Варианты отделки:</h3>
                <div className="space-y-3">
                  <div className="p-3 border rounded">
                    <p className="font-semibold">Теплый контур</p>
                    <p className="text-construction-orange font-bold">{price}</p>
                  </div>
                  <div className="p-3 border rounded">
                    <p className="font-semibold">Теплый контур + инженерные коммуникации</p>
                    <p className="text-construction-orange font-bold">от {parseInt(price.replace(/\D/g, '')) + 500000} ₽</p>
                  </div>
                  <div className="p-3 border rounded">
                    <p className="font-semibold">Теплый контур + коммуникации + получистовая отделка</p>
                    <p className="text-construction-orange font-bold">от {parseInt(price.replace(/\D/g, '')) + 1000000} ₽</p>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <Button 
                    className="bg-construction-orange hover:bg-construction-orange/90"
                    onClick={() => window.open('tel:+74958682717', '_self')}
                  >
                    <Icon name="Phone" className="mr-2 h-4 w-4" />
                    +7 495 868 27 17
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-green-500 text-green-600 hover:bg-green-50"
                    onClick={() => window.open('https://wa.me/79067311711', '_blank')}
                  >
                    <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );

  const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
    <Card className="text-center p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 bg-construction-orange/10 rounded-full flex items-center justify-center">
          <Icon name={icon as any} className="h-6 w-6 text-construction-orange" />
        </div>
      </div>
      <h3 className="font-heading font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </Card>
  );

  const ProjectGallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const workImages = [
      "/img/b88d5763-1f86-439e-897d-337b6794e3c3.jpg",
      "/img/b88d5763-1f86-439e-897d-337b6794e3c3.jpg",
      "/img/b88d5763-1f86-439e-897d-337b6794e3c3.jpg",
      "/img/b88d5763-1f86-439e-897d-337b6794e3c3.jpg",
      "/img/b88d5763-1f86-439e-897d-337b6794e3c3.jpg"
    ];

    const nextImage = () => {
      setCurrentImage((prev) => (prev + 1) % workImages.length);
    };

    const prevImage = () => {
      setCurrentImage((prev) => (prev - 1 + workImages.length) % workImages.length);
    };

    return (
      <div className="relative">
        <div className="relative h-80 overflow-hidden rounded-lg">
          <img 
            src={workImages[currentImage]} 
            alt={`Работа ${currentImage + 1}`}
            className="w-full h-full object-cover"
          />
          <Button 
            variant="outline" 
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80"
            onClick={prevImage}
          >
            <Icon name="ChevronLeft" className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80"
            onClick={nextImage}
          >
            <Icon name="ChevronRight" className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {workImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentImage ? 'bg-construction-orange' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    );
  };

  const projects = [
    { title: "Дом из кирпича 120м²", price: "4 500 000 ₽", image: "/img/b88d5763-1f86-439e-897d-337b6794e3c3.jpg" },
    { title: "Коттедж из газобетона 150м²", price: "5 200 000 ₽", image: "/img/b88d5763-1f86-439e-897d-337b6794e3c3.jpg" },
    { title: "Загородный дом 100м²", price: "3 800 000 ₽", image: "/img/b88d5763-1f86-439e-897d-337b6794e3c3.jpg" },
    { title: "Семейный дом 180м²", price: "6 100 000 ₽", image: "/img/b88d5763-1f86-439e-897d-337b6794e3c3.jpg" },
    { title: "Современный дом 140м²", price: "4 900 000 ₽", image: "/img/b88d5763-1f86-439e-897d-337b6794e3c3.jpg" },
    { title: "Дом с мансардой 160м²", price: "5 600 000 ₽", image: "/img/b88d5763-1f86-439e-897d-337b6794e3c3.jpg" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-construction-orange rounded-lg flex items-center justify-center">
                <Icon name="Home" className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="font-heading font-bold text-lg md:text-xl text-construction-blue">BIRTEGA</h1>
                <p className="text-xs text-muted-foreground hidden md:block">Строительство домов под ключ в Москве и МО</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('tel:+74958682717', '_self')}
                >
                  <Icon name="Phone" className="mr-2 h-4 w-4" />
                  +7 495 868 27 17
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" className="bg-construction-orange hover:bg-construction-orange/90">
                      Позвоните мне
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Заказать обратный звонок</DialogTitle>
                    </DialogHeader>
                    <CallbackForm title="Заказать обратный звонок" buttonText="Позвоните мне" />
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-green-600"
                  onClick={() => window.open('https://wa.me/79067311711', '_blank')}
                >
                  <Icon name="MessageCircle" className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-blue-600"
                  onClick={() => window.open('https://t.me/+79067311711', '_blank')}
                >
                  <Icon name="Send" className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">Мы в соцсетях:</p>
                <div className="flex space-x-1 mt-1">
                  <Button variant="ghost" size="sm" onClick={() => window.open('https://t.me/birtega', '_blank')}>
                    <Icon name="Send" className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => window.open('https://vk.com/birtega', '_blank')}>
                    <Icon name="Users" className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => window.open('https://dzen.ru/birtega', '_blank')}>
                    <Icon name="Globe" className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => window.open('https://instagram.com/birtega', '_blank')}>
                    <Icon name="Camera" className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden">
                  <Icon name="Menu" className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="space-y-6 mt-8">
                  <div className="text-center">
                    <p className="font-semibold mb-2">Позвоните нам</p>
                    <Button 
                      variant="outline" 
                      className="w-full mb-4"
                      onClick={() => window.open('tel:+74958682717', '_self')}
                    >
                      <Icon name="Phone" className="mr-2 h-4 w-4" />
                      +7 495 868 27 17
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-construction-orange hover:bg-construction-orange/90">
                          Позвоните мне
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Заказать обратный звонок</DialogTitle>
                        </DialogHeader>
                        <CallbackForm title="Заказать обратный звонок" buttonText="Позвоните мне" />
                      </DialogContent>
                    </Dialog>
                  </div>

                  <div className="text-center border-t pt-6">
                    <p className="font-semibold mb-3">Напишите нам</p>
                    <div className="flex justify-center space-x-4">
                      <Button 
                        variant="outline" 
                        className="border-green-500 text-green-600"
                        onClick={() => window.open('https://wa.me/79067311711', '_blank')}
                      >
                        <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                        WhatsApp
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-blue-500 text-blue-600"
                        onClick={() => window.open('https://t.me/+79067311711', '_blank')}
                      >
                        <Icon name="Send" className="mr-2 h-4 w-4" />
                        Telegram
                      </Button>
                    </div>
                  </div>

                  <div className="text-center border-t pt-6">
                    <p className="font-semibold mb-3">Подписывайтесь на нас</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" onClick={() => window.open('https://vk.com/birtega', '_blank')}>VK</Button>
                      <Button variant="outline" size="sm" onClick={() => window.open('https://t.me/birtega', '_blank')}>TG</Button>
                      <Button variant="outline" size="sm" onClick={() => window.open('https://dzen.ru/birtega', '_blank')}>Дзен</Button>
                      <Button variant="outline" size="sm" onClick={() => window.open('https://instagram.com/birtega', '_blank')}>Instagram</Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/img/b88d5763-1f86-439e-897d-337b6794e3c3.jpg")' }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Дом для теплых вечеров<br />в кругу семьи
          </h1>
          <div className="max-w-2xl mx-auto space-y-4 animate-fade-in">
            <p className="text-xl md:text-2xl font-semibold">
              За 6 месяцев построим дом с гарантией 10 лет
            </p>
            <p className="text-lg opacity-90">
              Каменный дом из кирпича или газобетона, площадью 100м² до 7 000 000 рублей
            </p>
            <p className="text-lg opacity-90">
              До 3000 рублей в месяц за отопление
            </p>
          </div>
          
          <div className="mt-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-construction-orange hover:bg-construction-orange/90 text-lg px-8 py-4">
                  Бесплатная консультация по строительству
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Бесплатная консультация по строительству</DialogTitle>
                </DialogHeader>
                <CallbackForm title="Бесплатная консультация" buttonText="Получить консультацию" />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Projects Catalog */}
      <section className="py-20 bg-construction-light">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-construction-blue">
            Каталог проектов
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Forms */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8">
              <CardHeader>
                <CardTitle className="font-heading text-xl mb-4">Советы по выбору проекта</CardTitle>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-construction-orange hover:bg-construction-orange/90">
                      Получить советы
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Советы по выбору проекта и строительству</DialogTitle>
                    </DialogHeader>
                    <CallbackForm title="Советы по строительству" buttonText="Получить советы по выбору проекта и строительству" />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardHeader>
                <CardTitle className="font-heading text-xl mb-4">Каталог ТОП-15 проектов</CardTitle>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-construction-orange hover:bg-construction-orange/90">
                      Скачать каталог БЕСПЛАТНО
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Скачать каталог ТОП-15 проектов</DialogTitle>
                    </DialogHeader>
                    <CallbackForm title="Каталог проектов" buttonText="Получить каталог в ватсап" />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-construction-light">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-construction-blue">
            Фото наших работ
          </h2>
          <div className="max-w-4xl mx-auto">
            <ProjectGallery />
          </div>
        </div>
      </section>

      {/* Consultation and Office Visit */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8">
              <CardHeader>
                <CardTitle className="font-heading text-xl mb-4">Записаться на консультацию</CardTitle>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-construction-orange hover:bg-construction-orange/90">
                      Записаться на консультацию
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Записаться на консультацию</DialogTitle>
                    </DialogHeader>
                    <CallbackForm title="Консультация" buttonText="Записаться на консультацию" />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardHeader>
                <CardTitle className="font-heading text-xl mb-4">Встреча в офисе</CardTitle>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-construction-orange hover:bg-construction-orange/90">
                      Встреча в офисе
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Встреча в офисе</DialogTitle>
                    </DialogHeader>
                    <CallbackForm title="Встреча в офисе" buttonText="Записаться на встречу в офисе" />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-construction-light">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-construction-blue">
            Мы предлагаем
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <FeatureCard 
              icon="MapPin" 
              title="Подбор участка" 
              description="Бесплатная помощь по подбору участка для будущего строительства с выездом инженера и оценкой рисков строительства"
            />
            <FeatureCard 
              icon="Shield" 
              title="Гарантия 10 лет на строительство" 
              description="Прописываем в договоре гарантийные обязательства и заключаем договор на содержание и обслуживание"
            />
            <FeatureCard 
              icon="Lock" 
              title="Фиксированная стоимость строительства" 
              description="Фиксируем стоимость строительства в договоре"
            />
            <FeatureCard 
              icon="Eye" 
              title="Технадзор" 
              description="Бесплатно обеспечим приемку этапов строительства Технадзором, зафиксируем все скрытые работы фото/видеофиксацией"
            />
            <FeatureCard 
              icon="CreditCard" 
              title="Поэтапная оплата" 
              description="Согласуем поэтапность оплаты выполненных работ"
            />
            <FeatureCard 
              icon="Home" 
              title="Поможем получить ипотеку" 
              description="Поможем оформить и получить ипотеку, в том числе с использованием льготных программ и программ с господдержкой"
            />
            <FeatureCard 
              icon="Baby" 
              title="Использование материнского капитала" 
              description="Использование материнского капитала в качестве первоначального взноса"
            />
            <FeatureCard 
              icon="Percent" 
              title="Скидки на строительные материалы от 10%" 
              description="Закупаем стройматериалы напрямую у производителей, что даст вам экономию на всех этапах"
            />
            <FeatureCard 
              icon="Camera" 
              title="Контроль строительства" 
              description="Камеры 24/7 на объекте"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-construction-orange hover:bg-construction-orange/90 text-lg px-8 py-4">
                Оставить заявку
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Оставить заявку</DialogTitle>
              </DialogHeader>
              <CallbackForm title="Оставить заявку" buttonText="Оставить заявку" />
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center mb-8 text-construction-blue">
            Наш офис
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="MapPin" className="h-12 w-12 text-construction-orange mx-auto mb-4" />
                    <p className="font-semibold text-lg">г. Москва, ул. Орджоникидзе 11, стр. 42</p>
                    <p className="text-muted-foreground mt-2">Карта загружается...</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-construction-blue text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-12 h-12 bg-construction-orange rounded-lg flex items-center justify-center">
                <Icon name="Home" className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">BIRTEGA</h3>
                <p className="text-sm opacity-80">Строительство домов под ключ</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-construction-blue"
                  onClick={() => window.open('tel:+74958682717', '_self')}
                >
                  <Icon name="Phone" className="mr-2 h-4 w-4" />
                  +7 495 868 27 17
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-construction-orange hover:bg-construction-orange/90">
                      Заказать звонок
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Заказать обратный звонок</DialogTitle>
                    </DialogHeader>
                    <CallbackForm title="Заказать звонок" buttonText="Перезвоните мне" />
                  </DialogContent>
                </Dialog>
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  variant="ghost" 
                  className="text-green-400 hover:bg-green-400/20"
                  onClick={() => window.open('https://wa.me/79067311711', '_blank')}
                >
                  <Icon name="MessageCircle" className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-blue-400 hover:bg-blue-400/20"
                  onClick={() => window.open('https://t.me/+79067311711', '_blank')}
                >
                  <Icon name="Send" className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 BIRTEGA. Все права защищены. Строительство домов под ключ в Москве и Московской области.</p>
            <p className="mt-2">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-white underline hover:text-construction-orange transition-colors">
                    Пользовательское соглашение
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Пользовательское соглашение</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 text-sm">
                    <h3 className="font-semibold">1. Общие положения</h3>
                    <p>Настоящее Пользовательское соглашение регулирует отношения между ООО "BIRTEGA" и пользователями сайта при использовании услуг строительства домов под ключ.</p>
                    
                    <h3 className="font-semibold">2. Услуги</h3>
                    <p>Компания предоставляет услуги по строительству домов под ключ в Москве и Московской области, включая проектирование, строительство и отделочные работы.</p>
                    
                    <h3 className="font-semibold">3. Обработка персональных данных</h3>
                    <p>Отправляя заявку через формы на сайте, вы соглашаетесь на обработку персональных данных в соответствии с ФЗ "О персональных данных" №152-ФЗ.</p>
                    
                    <h3 className="font-semibold">4. Гарантии</h3>
                    <p>Компания предоставляет гарантию на строительство сроком 10 лет в соответствии с договором.</p>
                    
                    <h3 className="font-semibold">5. Контакты</h3>
                    <p>ООО "BIRTEGA"<br/>Адрес: г. Москва, ул. Орджоникидзе 11, стр. 42<br/>Телефон: +7 495 868 27 17</p>
                  </div>
                </DialogContent>
              </Dialog>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;